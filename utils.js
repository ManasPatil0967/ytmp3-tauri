export async function downloadYTDLP(url) {
    const apiUrl = 'http://localhost:8000';
    try {
        const response = await fetch(apiUrl + '/download_yt_dlp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url })
        });

        console.log("utils 13", response);

        if (!response.ok) {
            throw new Error(`HTTP error status: ${response.status}`);
        }

        const blob = await response.blob();

        const blobUrl = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobUrl;
        link.setAttribute('download', 'audio.mp3'); 
        document.body.appendChild(link); 
        link.click(); 

        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);

        return blob;
    } catch (error) {
        console.error('Error:', error);
        return 'An error occurred.';
    }
}
