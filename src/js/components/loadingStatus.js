function isLoading(value){
  const loading = document.getElementById('loading')

  if (value == true) loading.classList.remove('hidden')
  else loading.classList.add('hidden')
}

export default isLoading 
