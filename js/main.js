function generatePin() {
    const pin = Math.round(Math.random() * 10000)
    pinLength = (pin + '').length
    if (pinLength == 4) {
        return pin
    } else {
        return (generatePin())
    }
}

document.getElementById('generate-btn').addEventListener('click', function () {
    document.getElementById('show-pin-field').value = generatePin()
    document.getElementById('submit-btn').removeAttribute('disabled')
    document.getElementById('try-left').innerText=3
})

document.getElementById('keypads').addEventListener('click', function (event) {
    const newNumber = event.target.innerText
    const pinInput = document.getElementById('pin-input')
    const prevNumber = pinInput.value
    if (isNaN(newNumber)) {
        if (newNumber == 'C') {
            pinInput.value = ''
        }
    } else {
        const output = prevNumber + newNumber
        pinInput.value = output
    }
})

function matchingPin() {
    const pinInput = document.getElementById('pin-input')
    const generatedPin = document.getElementById('show-pin-field').value
    const successMessage = document.getElementById('success')
    const errorMessage = document.getElementById('error')
    const tryLeftField = document.getElementById('try-left')
    let tryLeft = parseInt(tryLeftField.innerText)

    if (tryLeft == 1) {
        document.getElementById('submit-btn').setAttribute('disabled',true)
        tryLeft--
    } else {
        if (generatedPin == pinInput.value) {
            successMessage.removeAttribute('hidden')
            errorMessage.setAttribute('hidden', true)
            document.getElementById('show-pin-field').value=' '
        } else {
            errorMessage.removeAttribute('hidden')
            successMessage.setAttribute('hidden', true)
            tryLeft--
        }
    }
    tryLeftField.innerText = tryLeft
    pinInput.value = ''
}