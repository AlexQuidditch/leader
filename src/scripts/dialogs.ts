import IMask, { AnyMaskedOptions } from 'imask'

export function useToggleDialog(el: Element) {
  el.addEventListener('click', e => {
    e.preventDefault()
    closeDialogs()
    const targetDialog = el.getAttribute('data-target-dialog')
    const targetDialogEl = document.querySelector(`[data-dialog=${targetDialog}]`)
    if (!targetDialogEl) { return; }
    toggleOverFlow()
    targetDialogEl.classList.toggle('_show')
  })
}

export function useChargeDialog(el: Element): void {
  const chargeDialog = document.querySelector('[data-dialog=charge-balance-dialog]')

  if (!chargeDialog) { return; }

  el.addEventListener('click', e => {
    e.preventDefault()
    closeDialogs()
    const targetDialog = el.getAttribute('data-charge-dialog')
    const dataGroupTitle = el.getAttribute('data-group-title')
    const dataItemTitle = el.getAttribute('data-item-title')
    const dataItemPrice = el.getAttribute('data-item-price')

    const $groupTitle = chargeDialog.querySelector('[data-charge-target=group-title]')
    const $itemTitle = chargeDialog.querySelector('[data-charge-target=item-title]')
    const $itemPrice = chargeDialog.querySelector('[data-charge-target=item-price]')

    if (!$groupTitle || !$itemTitle || !$itemPrice) { return }

    $groupTitle.textContent = dataGroupTitle
    $itemTitle.textContent = dataItemTitle
    $itemPrice.textContent = `ИТОГО: ${dataItemPrice} рублей`

    const targetDialogEl = document.querySelector(`[data-dialog=${targetDialog}]`)
    if (!targetDialogEl) { return; }
    toggleOverFlow()
    targetDialogEl.classList.toggle('_show')
  })
}

export function useCloseDialog(el: Element): void {
  el.addEventListener('click', e => {
    e.preventDefault()
    const targetDialog = el.closest('._show')
    if (!targetDialog) { return; }
    targetDialog.classList.remove('_show')
    removeOverFlow()
  })
}

export function useDialogs(cb: (elements: Element[]) => void): void {
  const dialogs = Array.from(document.querySelectorAll('[data-dialog]'))
  cb(dialogs)
}

export function closeDialogs(): void {
  useDialogs(dialogs => dialogs.forEach(el => el.classList.remove('_show')))
  removeOverFlow()
}

export function toggleOverFlow(): void {
  document.documentElement.classList.toggle('_no-scroll')
}

export function removeOverFlow(): void {
  document.documentElement.classList.remove('_no-scroll')
}

export function initCleanTextFieldButtons(): void {
  const buttons = Array.from(document.querySelectorAll('.auth-form__input-reset'))
  buttons.forEach(el => el.addEventListener('click', e => {
    const $input = el.previousElementSibling as HTMLInputElement | null;
    if (!$input) { return; }
    const isMasked = !!$input.getAttribute('masked')
    console.dir({ $input }, { depth: 10 });
    $input.value = ''
  }))
}

export function setTextFieldError(fieldId: string, errors: string[]): void {
  const labelContainer = document.querySelector(`label[for=${fieldId}]`)
  if (!labelContainer) { return }

  const input = labelContainer.querySelector('input')
  if (!input) { return }

  input.classList.add('_invalid')

  errors.forEach(err => {
    const errNode = document.createElement('span')
    errNode.className = 'auth-form__error-message'
    errNode.innerText = err
    labelContainer.appendChild(errNode)
  })
}

export function resetTextField(fieldId: string): void {
  const labelContainer = document.querySelector(`label[for=${fieldId}]`)
  if (!labelContainer) { return }

  const input = labelContainer.querySelector('input')
  if (!input) { return }

  input.className = input.classList.item(0) || ''

  Array
    .from(labelContainer.querySelectorAll('.auth-form__error-message'))
    .forEach(n => n.remove())
}

export function initMaskedTextFields(selector: string, mask: AnyMaskedOptions): void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
  elements.forEach(el => IMask(el, mask))
}
