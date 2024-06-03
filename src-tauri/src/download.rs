use std::process::Command;

#[tauri::command]
pub fn download(url: &str) -> () {
    // let yt_dlp_path = download_yt_dlp(".").await.unwrap();
    let output = Command::new(r"C:\Users\manas\Downloads\yt-dlp.exe")
        .arg("-f")
        .arg("bestaudio")
        .arg("--extract-audio")
        .arg("--audio-format")
        .arg("mp3")
        .arg("--audio-quality")
        .arg("0")
        .arg("--output")
        .arg("%(title)s.%(ext)s")
        .arg("--no-playlist")
        .arg("--no-warnings")
        .arg("--no-call-home")
        .arg("--no-check-certificate")
        .arg(url)
        .output()
        .expect("Failed to execute command");

    println!("status: {}", output.status);
}