const handleaddreaction = event => {
    event.preventDefault()

    const reactionValue = document.querySelector('#reaction-list')

    const checkbox = document.createElement('')
    checkbox.type = 
    checkbox.name =
    checkbox.value = reactionValue
    checkbox.id = reactionValue
    .toLowerCase()
    .split(' ')
    .join('-')
}