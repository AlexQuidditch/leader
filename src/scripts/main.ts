import 'normalize.css/normalize.css'
import 'choices.js/public/assets/styles/choices.min.css'

import '../styles/style.scss'

import {
  useGallery,
} from './gallery'

import {
  closeDialogs,
  setTextFieldError,
  useCloseDialog,
  useToggleDialog,
  resetTextField,
  useChargeDialog,
  initMaskedTextFields,
} from './dialogs'

document.addEventListener('DOMContentLoaded', () => {
  const $menuButton = document.getElementById('menu-button')
  const $sidebarEl = document.getElementById('sidebar')

  if (!$menuButton) { return }

  $menuButton.addEventListener('click', e => {
    e.preventDefault()
    if (!$menuButton || !$sidebarEl) { return }
    $menuButton.classList.toggle('is-active')
    $sidebarEl.classList.toggle('_active')
    document.documentElement.classList.toggle('_no-scroll')
  })

  document.addEventListener('keydown', e => {
    const isEsc = e.key.toLowerCase() === 'escape'
    if (!isEsc) { return }
    closeDialogs()
  })

  initMaskedTextFields(
    'input[type=tel]',
    { mask: '+{7} (000) 000-00-00' }
  )

  useGallery('#reviews-slider')
  useGallery('#team-slider')

  Array
    .from(document.querySelectorAll('[data-target-dialog]'))
    .forEach(useToggleDialog)

  Array
    .from(document.querySelectorAll('[data-charge-dialog]'))
    .forEach(useChargeDialog)

  Array
    .from(document.querySelectorAll('[data-dialog-action=close]'))
    .forEach(useCloseDialog)
})

// @ts-ignore
window.setTextFieldError = setTextFieldError
// @ts-ignore
window.resetTextField = resetTextField
// @ts-ignore
window.useChargeDialog = useChargeDialog
