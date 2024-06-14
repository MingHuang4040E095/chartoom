import { inject } from 'vue'
export const formHook = (inputValue) => {
  // -------------- 表單驗證區塊 --------------
  const formItemFields = inject('formFields', {})
  const fieldKey = inject('fieldKey', '')

  if (formItemFields && fieldKey) {
    formItemFields[fieldKey].value = inputValue.value // 當前欄位的值
  }

  /**
   * 觸發FormItem組件的驗證
   * @param {[String]} type 觸發時機 blur:失焦 focus:聚焦 change:值改變
   * @param {[Any]} value 欄位的值
   */
  const triggerCallback = async (type, value) => {
    if (!formItemFields[fieldKey]) return
    // 觸發驗證
    formItemFields[fieldKey].triggerCallback(type, value)
  }

  return {
    triggerCallback, // 觸發FormItem組件的驗證
  }
}
