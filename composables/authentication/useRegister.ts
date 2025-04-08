import { PAGE } from "~/config/page-url"
import { useAppStore } from "~/stores/app"

interface IRegistrationForm {
  name: string
  emailOrPhone: string
  password: string
}

export function useRegister() {
  const { $toast } = useNuxtApp()
  const store = useAppStore()

  const form = reactive<IRegistrationForm>({
    name: '',
    emailOrPhone: '',
    password: ''
  })

  const isSubmitting = ref(false)

  const validateForm = () => {
    if (!form.name || !form.emailOrPhone || !form.password) {
      return 'All fields are required'
    }
  
    if (!/^\S+@\S+\.\S+$/.test(form.emailOrPhone) && !(/^(03|05|07|08|09)\d{8}$/).test(form.emailOrPhone)) {
      return 'Invalid email or phone number format'
    }
    return ''
  }

  const resetForm = () => {
    Object.assign(form, {
      name: '',
      emailOrPhone: '',
      password: ''
    })
  }


  const submitForm = async () => {
    const error = validateForm()
    if (error) {
      return $toast.error(error)
    }

    try {
      isSubmitting.value = true
      await new Promise(resolve => setTimeout(resolve, 1000))
      $toast.success('Register successfully!')
      store.setUser({
        name: form.name,
        emailOrPhone: form.emailOrPhone
      })
      resetForm()
      setTimeout(() => {
        navigateTo(PAGE.HOME)
      }, 2000)
    } catch (error) {
      $toast.error('An error occurred, please try again later!')
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    isSubmitting,
    submitForm
  }
}