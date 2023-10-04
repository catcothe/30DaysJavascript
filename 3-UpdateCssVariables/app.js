const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

// setProperty(propertyName, value)
// setProperty(propertyName, value, priority)


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));