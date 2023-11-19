function extractFile(str) {
    let sub = str.substring(str.lastIndexOf('\\') + 1, str.length);
    let fileName = sub.substring(0, sub.lastIndexOf('.'));
    let fileExtension = sub.substring(sub.lastIndexOf('.') + 1, sub.length);
    

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');