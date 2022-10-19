<template>
  <div class="prefixCls" :style="{ width: containerWidth }">
        <textarea
            :id="tinymceId"
            ref="elRef"
            :style="{ visibility: 'hidden' }"
        ></textarea>
  </div>
</template>

<script setup>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver'
import 'tinymce/icons/default/icons'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/autosave'
import 'tinymce/plugins/code'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/directionality'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/link'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/media'
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/noneditable'
import 'tinymce/plugins/pagebreak'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/print'
import 'tinymce/plugins/save'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/spellchecker'
import 'tinymce/plugins/tabfocus'
import 'tinymce/plugins/template'
import 'tinymce/plugins/textpattern'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/visualchars'
import 'tinymce/plugins/wordcount'
// import 'tinymce/plugins/table';

import { computed, nextTick, ref, unref, watch, onDeactivated, onBeforeUnmount,  defineEmits, getCurrentInstance } from 'vue'
import { toolbar, plugins } from './tinymce'
import { buildShortUUID,isNumber } from '../../utils/tinymce.js'
import { bindHandlers } from './helper'
import { onMountedOrActivated } from '../../utils/onMountedOrActivated.js'


const props = defineProps({
  options: {
    type: Object,
    default: () => {}
  },
  value: {
    type: String
  },

  toolbar: {
    type: Array,
    default: toolbar
  },
  plugins: {
    type: Array,
    default: plugins
  },
  modelValue: {
    type: String
  },
  height: {
    type: [Number, String],
    required: false,
    default: 400
  },
  width: {
    type: [Number, String],
    required: false,
    default: 'auto'
  },
  showImageUpload: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['change', 'update:modelValue', 'inited', 'init-error'])
const { attrs } = getCurrentInstance()
const tinymceId = ref(buildShortUUID('tiny-vue'))
const containerWidth = computed(() => {
  const width = props.width
  if (isNumber(width)) {
    return `${width}px`
  }
  return width
})
const editorRef = ref(null)
const fullscreen = ref(false)
const elRef = ref(null)
const tinymceContent = computed(() => props.modelValue)

const initOptions = computed(() => {
  const { height, options, toolbar, plugins } = props
  const publicPath = '/'
  return {
    selector: `#${unref(tinymceId)}`,
    height,
    toolbar,
    menubar: 'file edit insert view format table',
    plugins,
    language_url: '/resource/tinymce/langs/zh_CN.js',
    language: 'zh_CN',
    branding: false,
    default_link_target: '_blank',
    link_title: false,
    object_resizing: false,
    auto_focus: true,
    skin: 'oxide',
    // skin_url: '/resource/tinymce/skins/ui/oxide',
    skin_url: '/resource/tinymce/skins/ui/oxide',
    content_css: '/resource/tinymce/skins/ui/oxide/content.min.css',
    ...options,
    setup: (editor) => {
      editorRef.value = editor
      editor.on('init', (e) => initSetup(e))
    }
  }
})

const disabled = computed(() => {
  const { options } = props
  const getdDisabled = options && Reflect.get(options, 'readonly')
  const editor = unref(editorRef)
  if (editor) {
    editor.setMode(getdDisabled ? 'readonly' : 'design')
  }
  return getdDisabled ?? false
})

watch(
    () => attrs.disabled,
    () => {
      const editor = unref(editorRef)
      if (!editor) {
        return
      }
      editor.setMode(attrs.disabled ? 'readonly' : 'design')
    }
)

onMountedOrActivated(() => {
  if (!initOptions.value.inline) {
    tinymceId.value = buildShortUUID('tiny-vue')
  }
  nextTick(() => {
    setTimeout(() => {
      initEditor()
    }, 30)
  })
})

onBeforeUnmount(() => {
  destory()
})

onDeactivated(() => {
  destory()
})

function destory () {
  if (tinymce !== null) {
    // tinymce?.remove?.(unref(initOptions).selector!);
  }
}

function initSetup (e) {
  const editor = unref(editorRef)
  if (!editor) {
    return
  }
  const value = props.modelValue || ''

  editor.setContent(value)
  bindModelHandlers(editor)
  bindHandlers(e, attrs, unref(editorRef))
}

function initEditor () {
  const el = unref(elRef)
  if (el) {
    el.style.visibility = ''
  }
  tinymce .init(unref(initOptions))
      .then((editor) => {
        emits('inited', editor)
      })
      .catch((err) => {
        emits('init-error', err)
      })
}

function setValue (editor, val, prevVal) {
  if (
      editor &&
      typeof val === 'string' &&
      val !== prevVal &&
      val !== editor.getContent({ format: attrs.outputFormat })
  ) {
    editor.setContent(val)
  }
}

function bindModelHandlers (editor) {
  const modelEvents = attrs.modelEvents ? attrs.modelEvents : null
  const normalizedEvents = Array.isArray(modelEvents) ? modelEvents.join(' ') : modelEvents

  watch(
      () => props.modelValue,
      (val, prevVal) => {
        setValue(editor, val, prevVal)
      }
  )

  watch(
      () => props.value,
      (val, prevVal) => {
        setValue(editor, val, prevVal)
      },
      {
        immediate: true
      }
  )

  editor.on(normalizedEvents || 'change keyup undo redo', () => {
    const content = editor.getContent({ format: attrs.outputFormat })
    emits('update:modelValue', content)
    emits('change', content)
  })

  editor.on('FullscreenStateChanged', (e) => {
    fullscreen.value = e.state
  })
}

function handleImageUploading (name) {
  const editor = unref(editorRef)
  if (!editor) {
    return
  }
  editor.execCommand('mceInsertContent', false, getUploadingImgName(name))
  const content = editor?.getContent() ?? ''
  setValue(editor, content)
}

function handleDone (name, url) {
  const editor = unref(editorRef)
  if (!editor) {
    return
  }
  const content = editor?.getContent() ?? ''
  const val = content?.replace(getUploadingImgName(name), `<img src="${url}"/>`) ?? ''
  setValue(editor, val)
}

function getUploadingImgName (name) {
  return `[uploading:${name}]`
}
</script>

<style lang="scss" scoped>
.prefixCls{
  position: relative;
  line-height: normal;
}
textarea {
  z-index: -1;
  visibility: hidden;
}
</style>
