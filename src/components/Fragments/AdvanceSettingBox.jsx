import React, { useEffect, useState } from "react"
import {Card, CardHeader, CardBody} from '../Elements/Card'
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit"
import { useNavigate } from "react-router-dom" // 1. Impor useNavigate

const AdvanceSettingBox = (props)=>{
    const navigate = useNavigate() // 2. Inisialisasi useNavigate
    const [selectedGenai, setSelectedGenai] = useState('')

    // 3. useEffect untuk memeriksa localStorage saat komponen pertama kali dimuat
    useEffect(() => {
        let genaiModel = localStorage.getItem('genai')
        if (!genaiModel) {
            genaiModel = 'flash' // default value
            localStorage.setItem('genai', genaiModel)
        }
        setSelectedGenai(genaiModel)
    }, [])

    // Fungsi untuk menyimpan perubahan
    const handleSaveGenai = ()=>{
        localStorage.setItem('genai', selectedGenai)
        // Mungkin bisa ditambahkan notifikasi sukses di sini
        alert(`Model Genai disimpan: ${selectedGenai}`)
    }
    
    return (
        <>
            {/* CSS untuk membuat tombol lebih estetik */}
            <style>{`
                .btn-aesthetic {
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    text-transform: none; /* Agar huruf tidak kapital semua */
                }
                .btn-aesthetic:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
                }
            `}</style>

            <div className="col-12 col-md-12">
            <Card>
                <CardHeader>
                <h5 className="card-title">Advance Settings</h5>
                </CardHeader>
                <CardBody>
                    {/* --- Pengaturan Genai --- */}
                    <label htmlFor="genai-select">Pilih Model Genai:</label>
                    <br />
                    <select 
                        name="genai" 
                        id="genai-select" 
                        className="form-select" // Menggunakan kelas bootstrap/mdb untuk tampilan
                        value={selectedGenai} // 4. Menghubungkan value dengan state
                        onChange={(e) => setSelectedGenai(e.target.value)} // 5. Mengubah state saat pilihan berganti
                    >
                        <option value="pro">gemini pro</option>
                        <option value="pro2">gemini pro2</option>
                        <option value="pro1">gemini pro1</option>
                        <option value="flash">gemini flash</option>
                        <option value="flash2">gemini flash2</option>
                        <option value="flash8b">gemini flash8b</option>
                        <option value="learn">gemini learn</option>
                        <option value="experimental">gemini experimental</option>
                    </select>
                    <br />

                    <MDBBtn onClick={handleSaveGenai} className="btn-aesthetic">
                        Simpan Model Genai
                    </MDBBtn>

                    <hr className="my-4"/>

                    {/* --- Tombol Navigasi Hostname --- */}
                    <div className="text-center">
                        <p className="text-muted">Perlu mengubah alamat server?</p>
                        <MDBBtn 
                            color="secondary" 
                            outline 
                            className="btn-aesthetic"
                            onClick={() => navigate('/hostname')} // 6. Arahkan ke halaman hostname
                        >
                            <MDBIcon fas icon="network-wired" className="me-2" />
                            Atur Hostname
                        </MDBBtn>
                    </div>

                </CardBody>
            </Card>
            </div>
        </>
    )
}

export default AdvanceSettingBox