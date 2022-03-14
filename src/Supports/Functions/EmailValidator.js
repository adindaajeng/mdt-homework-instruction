// Email Validator
// Ex. ryan@gmail.com, ryan.ryan@gmail.com, ryan@telkomuniversity.ac.id
// Ex. ryangmail.com, ryan@com, ryan@, 0yan@gmail.com
// 1. Index pertama harus dimulai dengan huruf alfabet
// 2. Terdapat string pada sebelum dan sesudah @
// 3. Setelah string @ harus ada .
// 4. Setelah . harus ada string lagi

function EmailValidator(email){
    let number = '0123456789'
    let symbol = '!#$%&*'

    // Step1.
    if(number.includes(email[0])) return false

    for(let i=0; i<email.length; i++){
        if(email[i] === ' ') return false
        if(symbol.includes(email[i])) return false
    }

    // Step2. 
    let emailSplit = email.split('@')
    console.log(emailSplit)
    if(emailSplit.length !== 2 || emailSplit[1] === '') return false

    let hostingName = emailSplit[1].split('.')
    if(hostingName.length < 2 || hostingName.length > 3 ||  hostingName[1] === '') return false

    return true
}

export default EmailValidator