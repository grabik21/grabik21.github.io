const copytextelement = document.querySelectorAll('.copy')
    copytextelement.forEach(Element => {
        Element.addEventListener('click',async() => {
            const textcopy = Element.dataset.text;
            
            try{
                await navigator.clipboard.writeText(textcopy)
                console.log('Текст скопирован..')
            } catch (err){
                console.error('Не получилось скопировать текст!', err)
            }
        })
    })
    // iris
    // forge
    const iris_forge_11 = document.getElementById('iris-11-forge')
    const iris_forge_9 = document.getElementById('iris-9-forge')
    const iris_forge_8 = document.getElementById('iris-8-forge')
    const iris_forge_5 = document.getElementById('iris-5-forge')
    const iris_forge_4 = document.getElementById('iris-4-forge')
    // fabric
    const iris_fabric_11 = document.getElementById('iris-11-fabric')
    const iris_fabric_9 = document.getElementById('iris-9-fabric')
    const iris_fabric_8 = document.getElementById('iris-8-fabric')
    const iris_fabric_5 = document.getElementById('iris-5-fabric')
    const iris_fabric_4 = document.getElementById('iris-4-fabric')
    
    // plasmovoice
    // forge
    const plasmovoice_forge_11 = document.getElementById('plasmovoice-11-forge')
    const plasmovoice_forge_9 = document.getElementById('plasmovoice-9-forge')
    const plasmovoice_forge_8 = document.getElementById('plasmovoice-8-forge')
    const plasmovoice_forge_5 = document.getElementById('plasmovoice-5-forge')
    const plasmovoice_forge_4 = document.getElementById('plasmovoice-4-forge')
    // fabric
    const plasmovoice_fabric_11 = document.getElementById('plasmovoice-11-fabric')
    const plasmovoice_fabric_9 = document.getElementById('plasmovoice-9-fabric')
    const plasmovoice_fabric_8 = document.getElementById('plasmovoice-8-fabric')
    const plasmovoice_fabric_5 = document.getElementById('plasmovoice-5-fabric')
    const plasmovoice_fabric_4 = document.getElementById('plasmovoice-4-fabric')
    
    // emotecraft
    // forge
    const emote_forge_11 = document.getElementById('emote-11-forge')
    const emote_forge_9 = document.getElementById('emote-9-forge')
    const emote_forge_8 = document.getElementById('emote-8-forge')
    const emote_forge_5 = document.getElementById('emote-5-forge')
    const emote_forge_4 = document.getElementById('emote-4-forge')
    // fabric
    const emote_fabric_11 = document.getElementById('emote-11-fabric')
    const emote_fabric_9 = document.getElementById('emote-9-fabric')
    const emote_fabric_8 = document.getElementById('emote-8-fabric')
    const emote_fabric_5 = document.getElementById('emote-5-fabric')
    const emote_fabric_4 = document.getElementById('emote-4-fabric')
    
    // sodium
    // forge
    const sodium_forge_11 = document.getElementById('sodium-11-forge')
    const sodium_forge_9 = document.getElementById('sodium-9-forge')
    const sodium_forge_8 = document.getElementById('sodium-8-forge')
    const sodium_forge_5 = document.getElementById('sodium-5-forge')
    const sodium_forge_4 = document.getElementById('sodium-4-forge')
    // fabric
    const sodium_fabric_11 = document.getElementById('sodium-11-fabric')
    const sodium_fabric_9 = document.getElementById('sodium-9-fabric')
    const sodium_fabric_8 = document.getElementById('sodium-8-fabric')
    const sodium_fabric_5 = document.getElementById('sodium-5-fabric')
    const sodium_fabric_4 = document.getElementById('sodium-4-fabric')

    // block
    const plasmovoice = document.getElementById('plasmovoice-block')
    const emotecraft = document.getElementById('emote-block')
    const iris = document.getElementById('iris-block')
    const sodium = document.getElementById('sodium-block')
    // but
    const plasmovoicebut = document.getElementById('plasmo')
    const emotecraftbut = document.getElementById('emote')
    const irisbut = document.getElementById('iris')
    const sodiumbut = document.getElementById('sodium')
    // verison-but
    var ver = 1
    const fabricbut = document.getElementById('fabric')
    const forgebut = document.getElementById('forge')

    // работа кнопки fabric
    fabricbut.addEventListener('click',() => {
        if(ver == 1){
            k=0
            sodium_fabric_11.style.display = 'flex'
            sodium_fabric_8.style.display = 'flex'
            sodium_fabric_9.style.display = 'flex'
            sodium_fabric_5.style.display = 'flex'
            sodium_fabric_4.style.display = 'flex'
            iris_fabric_11.style.display = 'flex'
            iris_fabric_8.style.display = 'flex'
            iris_fabric_9.style.display = 'flex'
            iris_fabric_5.style.display = 'flex'
            iris_fabric_4.style.display = 'flex'
            plasmovoice_fabric_11.style.display = 'flex'
            plasmovoice_fabric_8.style.display = 'flex'
            plasmovoice_fabric_9.style.display = 'flex'
            plasmovoice_fabric_5.style.display = 'flex'
            plasmovoice_fabric_4.style.display = 'flex'
            emote_fabric_11.style.display = 'flex'
            emote_fabric_8.style.display = 'flex'
            emote_fabric_9.style.display = 'flex'
            emote_fabric_5.style.display = 'flex'
            emote_fabric_4.style.display = 'flex'

            sodium_forge_11.style.display = 'none'
            sodium_forge_9.style.display = 'none'
            sodium_forge_8.style.display = 'none'
            sodium_forge_5.style.display = 'none'
            sodium_forge_4.style.display = 'none'
            iris_forge_11.style.display = 'none'
            iris_forge_9.style.display = 'none'
            iris_forge_8.style.display = 'none'
            iris_forge_5.style.display = 'none'
            iris_forge_4.style.display = 'none'
            emote_forge_11.style.display = 'none'
            emote_forge_9.style.display = 'none'
            emote_forge_8.style.display = 'none'
            emote_forge_5.style.display = 'none'
            emote_forge_4.style.display = 'none'
            plasmovoice_forge_11.style.display = 'none'
            plasmovoice_forge_9.style.display = 'none'
            plasmovoice_forge_8.style.display = 'none'
            plasmovoice_forge_5.style.display = 'none'
            plasmovoice_forge_4.style.display = 'none'
            forgebut.style.backgroundColor = 'inherit'
            fabricbut.style.backgroundColor = '#888'
        }
        else{
            console.log('Менять нечего!')
        }
    }
)
// Работа кнопки forge
    forgebut.addEventListener('click',() => {
        if(ver == 1){
            k=0
            sodium_fabric_11.style.display = 'none'
            sodium_fabric_8.style.display = 'none'
            sodium_fabric_9.style.display = 'none'
            sodium_fabric_5.style.display = 'none'
            sodium_fabric_4.style.display = 'none'
            iris_fabric_11.style.display = 'none'
            iris_fabric_8.style.display = 'none'
            iris_fabric_9.style.display = 'none'
            iris_fabric_5.style.display = 'none'
            iris_fabric_4.style.display = 'none'
            plasmovoice_fabric_11.style.display = 'none'
            plasmovoice_fabric_8.style.display = 'none'
            plasmovoice_fabric_9.style.display = 'none'
            plasmovoice_fabric_5.style.display = 'none'
            plasmovoice_fabric_4.style.display = 'none'
            emote_fabric_11.style.display = 'none'
            emote_fabric_8.style.display = 'none'
            emote_fabric_9.style.display = 'none'
            emote_fabric_5.style.display = 'none'
            emote_fabric_4.style.display = 'none'

            sodium_forge_11.style.display = 'flex'
            sodium_forge_9.style.display = 'flex'
            sodium_forge_8.style.display = 'flex'
            sodium_forge_5.style.display = 'flex'
            sodium_forge_4.style.display = 'flex'
            iris_forge_11.style.display = 'flex'
            iris_forge_9.style.display = 'flex'
            iris_forge_8.style.display = 'flex'
            iris_forge_5.style.display = 'flex'
            iris_forge_4.style.display = 'flex'
            emote_forge_11.style.display = 'flex'
            emote_forge_9.style.display = 'flex'
            emote_forge_8.style.display = 'flex'
            emote_forge_5.style.display = 'flex'
            emote_forge_4.style.display = 'flex'
            plasmovoice_forge_11.style.display = 'flex'
            plasmovoice_forge_9.style.display = 'flex'
            plasmovoice_forge_8.style.display = 'flex'
            plasmovoice_forge_5.style.display = 'flex'
            plasmovoice_forge_4.style.display = 'flex'
            forgebut.style.backgroundColor = '#888'
            fabricbut.style.backgroundColor = 'inherit'
        }
        else{
            console.log('Менять нечего!')
        }
    }
)
plasmovoicebut.addEventListener('click',() => {
    plasmovoice.style.display = 'flex'
    emotecraft.style.display = 'none'
    sodium.style.display = 'none'
    iris.style.display = 'none'
    plasmovoicebut.style.color = 'rgb(163, 206, 192)'
    emotecraftbut.style.color = 'white'
    irisbut.style.color = 'white'
    sodiumbut.style.color = 'white'
})
emotecraftbut.addEventListener('click',() => {
    plasmovoice.style.display = 'none'
    emotecraft.style.display = 'flex'
    sodium.style.display = 'none'
    iris.style.display = 'none'
    emotecraftbut.style.color = 'rgb(163, 206, 192)'
    plasmovoicebut.style.color = 'white'
    irisbut.style.color = 'white'
    sodiumbut.style.color = 'white'
})
sodiumbut.addEventListener('click',() => {
    plasmovoice.style.display = 'none'
    emotecraft.style.display = 'none'
    sodium.style.display = 'flex'
    iris.style.display = 'none'
    sodiumbut.style.color = 'rgb(163, 206, 192)'
    plasmovoicebut.style.color = 'white'
    irisbut.style.color = 'white'
    emotecraftbut.style.color = 'white'
})
irisbut.addEventListener('click',() => {
    plasmovoice.style.display = 'none'
    emotecraft.style.display = 'none'
    sodium.style.display = 'none'
    iris.style.display = 'flex'
    irisbut.style.color = 'rgb(163, 206, 192)'
    plasmovoicebut.style.color = 'white'
    sodiumbut.style.color = 'white'
    emotecraftbut.style.color = 'white'
})