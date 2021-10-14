// ================ Form Settings ==========

/* const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trik')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:hms745@gmail.com?subject=Nombre: ${form.get('name')} Correo: ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
} */

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Gracias por contactarme, te escribiré pronto :)')
    }
}