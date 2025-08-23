import { useState } from 'react'
import './App.css'

const biodataLinus = `
Linus Benedict Torvalds (lahir 28 Desember 1969) adalah rekayasawan perangkat lunak Finlandia yang dikenal sebagai perintis pengembangan Kernel Linux. Ia sekarang bertindak sebagai koordinator proyek tersebut.
Linux terinsipirasi oleh Minix (sistem operasi yang dikembangkan oleh Andrew S. Tanenbaum) untuk mengembangkan sistem operasi mirip Unix (Unix-like) yang dapat dijalankan pada sebuah PC. Linux sekarang dapat dijalankan pada berbagai arsitektur lain.
Ketika Linus Torvalds, seorang mahasiswa Finlandia pendiam membagi-bagikan kode sumber (source code) kernel Linux seukuran disket via internet pada tahun 1991, ia sama sekali tidak menduga bahwa apa yang dimulainya melahirkan sebuah bisnis bernilai miliaran dolar di kemudian hari.
Ia bahkan tidak menduga Linux kemudian menjadi sistem operasi paling menjanjikan, yang bisa dibenamkan ke dalam server, komputer desktop, tablet PC, PDA, ponsel, GPS, robot, mobil hingga pesawat ulang alik buatan NASA.`;

const App = () => {
    const [openBio, setOpen] = useState(false);
    const Open = () => {
        setOpen(!openBio)
    }
    return (
        <>
            <header className="space-between">
                <h1>Portfolio.</h1>
            </header>
            <main>
                <div className="container">
                    <div className="space-between">
                        <h3>Penemu Linux</h3>
                        <button onClick={Open}>{openBio ? "↑" : "↓"}</button>
                    </div>
                    {openBio && <>
                        <div className="flex">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg" />
                            <div className="profileWrapper">
                                <h1>Linus Torvalds</h1>
                            </div>
                        </div>
                        <p>{biodataLinus}</p>
                    </>}
                </div>
            </main>
        </>
    )
}

export default App