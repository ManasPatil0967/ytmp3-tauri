import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

let TauriAppsApi: { default?: any; invoke: any; app?: any; cli?: any; clipboard?: any; dialog?: any; event?: any; fs?: any; globalShortcut?: any; http?: any; notification?: any; path?: any; process?: any; shell?: any; tauri?: any; updater?: any; window?: any; os?: any; };

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Dynamically import @tauri-apps/api here instead of using dynamic
    import('@tauri-apps/api').then((api) => {
      TauriAppsApi = api;
    }).catch((error) => {
      console.error('Failed to load Tauri API:', error);
    });
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!TauriAppsApi) throw new Error('Tauri API not loaded');
      const { invoke } = TauriAppsApi;
      await invoke('download', { url }).then((response: any) => {
        console.log(response);
      }
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Image src="/vercel.svg" width={100} height={100} alt="Vercel Logo" />
      <h1 className="text-4xl font-bold text-center">YouTube to MP3 Converter</h1>
      <p className="text-center">Convert YouTube videos to MP3 files</p>

      <form className="flex justify-center mt-8" onSubmit={handleSubmit}>
        <input
          className="p-2 border border-gray-300 rounded-l text-black w-96"
          type="text"
          placeholder="Paste YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded-r" type="submit" disabled={loading}>
          {loading? 'Converting...' : 'Convert'}
        </button>
      </form>
      <div className='text-3xl font-bold text-center p-4 m-4'>
        {!loading ? 'Downloaded!' : ''}
      </div>
    </div>
  );
}
