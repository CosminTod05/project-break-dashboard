
const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000",
    "https://images.unsplash.com/photo-1511576661531-b3837da1262d?q=80&w=1000",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1000",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1000",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1000",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1000"
];

function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];
    
    // Cambiar el fondo del body
    document.body.style.backgroundImage = `url('${imageUrl}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
}

// Cambiar cada 15 segundos
setInterval(changeBackgroundImage, 15000);

// Cambiar al cargar la página
changeBackgroundImage();
