interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

export default function useContactForm() {
  const { $toast } = useNuxtApp()

  const form = reactive<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const isSubmitting = ref(false)
  const submitError = ref<string>('')

  const validateForm = () => {
    if (!form.name || !form.email || !form.phone || !form.message) {
      return 'All fields are required'
    }
  
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      return 'Invalid email format'
    }
    
    if (!(/^(03|05|07|08|09)\d{8}$/).test(form.phone)) {
      return 'Invalid phone number format'
    }
    return ''
  }

  const resetForm = () => {
    submitError.value = ''

    Object.assign(form, {
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  const submitForm = async () => {
    const error = validateForm()
    if (error) {
      submitError.value = error
      return
    }

    try {
      isSubmitting.value = true
      await new Promise(resolve => setTimeout(resolve, 1000))
      $toast.success('Message was sent!')
      resetForm()
    } catch (error) {
      $toast.error('An error occurred, please try again later!')
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    isSubmitting,
    submitError,
    submitForm
  }
}