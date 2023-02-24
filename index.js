const formElement = document.getElementById('form1');
const body = document.querySelector('body')
const listLinks = document.querySelector('.links')

const generateLink = (number) => {
    const link = document.createElement('a')
    link.setAttribute('href', `labwork${number}/lab${number}.php`)
    link.textContent = `Ссылка на практическую №${number}`
    link.classList.add('link')
    link.style.removeProperty('animation')
    listLinks.insertAdjacentElement('afterbegin', link)
    return link
}

const generateErr = (number) => {
    const err = document.createElement('p')
    err.textContent = `Произошла ошибка, практической №${number} не существует. Попробуйте снова`
    err.classList.add('error')
    err.style.removeProperty('animation')
    listLinks.insertAdjacentElement('afterbegin', err)
    return err
}

const getTextFrom = (listLinks) => {    
  const list = listLinks.querySelectorAll('*')
  const arr = [...list].map(item => item)
  const len = arr.length
  for (let i = 0; i < len; i++) {
    setTimeout(() => {
      if (i >= 3) {
        arr[i].classList.add('remove')
        setTimeout(() => {
          if (listLinks.contains(arr[i])) {
            listLinks.removeChild(arr[i])
          }
        }, 550)
      }
    }, 1000)
  }
  return arr
}

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement)
  const number = formData.get('number')

  const prom = new Promise((resolve, reject) => {
    if(/^([1-6]|7\-8)$/.test(number)) {
      // generateLink(number)
      console.log('success')
      resolve()
    } else {
      // generateErr(number)
      console.log('error')
      reject()
    }
  })

  getTextFrom(listLinks)

  prom.then(() => generateLink(number)).catch(() => generateErr(number))
})

listLinks.addEventListener('click', (e) => {
  const list = listLinks.querySelectorAll('*')
  const target = e.target;
  const arr = [...list].map(item => item)
  console.log(arr)
  if (target.classList.contains('link')) {
    for (let i = 0; i < arr.length; i++) {
      listLinks.removeChild(arr[i])
    }
  }
})