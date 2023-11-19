function cone(radius, height) {
    let slantHeight = Math.sqrt(radius ** 2 + height ** 2);
    let volume = ((height * Math.PI * radius ** 2) / 3).toFixed(4);
    let area = (Math.PI * radius * (radius + slantHeight)).toFixed(4);
    console.log(`volume = ${volume}`);
    console.log(`area = ${area}`);
}
