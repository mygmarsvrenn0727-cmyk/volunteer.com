const images = [
      'https://i.pravatar.cc/150?img=1',
      'https://i.pravatar.cc/150?img=2',
      'https://i.pravatar.cc/150?img=3',
      'https://i.pravatar.cc/150?img=4',
      'https://i.pravatar.cc/150?img=5',
]

const photos = document.getElementById("photos")

for (let i=0; i < images.length; i++) {
    const imgTag = document.createElement('img')
    imgTag.src = images[i]
    photos.appendChild(imgTag)
}   



