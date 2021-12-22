const formRange = document.getElementById('form-range')
const precio = document.getElementById('precio')
const visitas = document.getElementById('visitas')
const arrayVisitas = ['20K', '40K', '60K', '80K', '100K']

formRange.addEventListener('input', () => {
    precio.textContent = formRange.value
    visitas.textContent = arrayVisitas[(formRange.value / 10 - 1)]
})