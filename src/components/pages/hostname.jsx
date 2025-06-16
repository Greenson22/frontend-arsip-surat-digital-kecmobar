import React, { useState, useEffect } from "react";
import { 
    MDBContainer, 
    MDBCard, 
    MDBCardBody, 
    MDBRow, 
    MDBCol, 
    MDBBtn, 
    MDBInput, 
    MDBIcon, 
    MDBTypography,
    MDBCollapse // Import MDBCollapse untuk dropdown kustom
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

// --- Variabel Lingkungan ---
const HOSTNAME_LOCAL = import.meta.env.VITE_HOSTNAME_LOCAL || 'http://localhost:8000';
const HOSTNAME_PUBLIC = import.meta.env.VITE_HOSTNAME_PUBLIC || 'https://api.public.com';

const GENAI_MODELS = [
    { value: "pro", label: "Gemini Pro" },
    { value: "pro1", label: "Gemini Pro 1" },
    { value: "pro2", label: "Gemini Pro 2" },
    { value: "flash", label: "Gemini Flash" },
    { value: "flash2", label: "Gemini Flash 2" },
    { value: "flash8b", label: "Gemini Flash 8b" },
    { value: "learn", label: "Gemini Learn" },
    { value: "experimental", label: "Gemini Experimental" }
];


const HostnamePage = () => {
    const navigate = useNavigate();
    
    // --- States ---
    const [activeHostname, setActiveHostname] = useState("");
    const [customHostname, setCustomHostname] = useState("");
    const [activeGenai, setActiveGenai] = useState("");
    const [isGenaiDropdownOpen, setIsGenaiDropdownOpen] = useState(false);

    // --- Efek dan Pemuatan Data ---
    useEffect(() => {
        const storedHostname = localStorage.getItem('hostname') || HOSTNAME_PUBLIC;
        setActiveHostname(storedHostname);
        if (storedHostname !== HOSTNAME_LOCAL && storedHostname !== HOSTNAME_PUBLIC) {
            setCustomHostname(storedHostname);
        }

        const storedGenai = localStorage.getItem('genai') || 'pro';
        setActiveGenai(storedGenai);
    }, []);

    // --- Handlers ---
    const handleSetHostname = (newHostname) => {
        localStorage.setItem('hostname', newHostname);
        setActiveHostname(newHostname);
    };
    
    const handleSaveCustom = () => {
        if (customHostname.trim() !== "") handleSetHostname(customHostname.trim());
    };

    const handleGenaiChange = (newGenaiModel) => {
        localStorage.setItem('genai', newGenaiModel);
        setActiveGenai(newGenaiModel);
        setIsGenaiDropdownOpen(false); // Tutup dropdown setelah memilih
    }

    const getGenaiLabel = (value) => {
        return GENAI_MODELS.find(m => m.value === value)?.label || 'Pilih Model';
    }

    return (
        <>
            {/* --- Blok CSS Kustom untuk Tampilan Modern --- */}
            <style>{`
                .gradient-background {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                    overflow-x: hidden;
                }
                .glass-panel {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border-radius: 1rem;
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
                    color: white;
                }
                .choice-button {
                    background: rgba(255, 255, 255, 0.15);
                    border: 1px solid transparent;
                    border-radius: 0.75rem;
                    padding: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                }
                .choice-button:hover {
                    background: rgba(255, 255, 255, 0.25);
                    transform: translateY(-3px);
                }
                .choice-button.active {
                    background: rgba(255, 255, 255, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
                }
                .custom-input .form-control {
                    background-color: rgba(0,0,0,0.2) !important;
                    color: white !important;
                    border: 1px solid rgba(255,255,255,0.2);
                }
                .custom-input .form-control::placeholder {
                    color: rgba(255,255,255,0.5);
                }
                .custom-dropdown-toggle {
                    background: rgba(255, 255, 255, 0.15);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 1rem;
                    border-radius: 0.75rem;
                    cursor: pointer;
                    transition: background 0.3s ease;
                }
                .custom-dropdown-menu {
                    background: rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(10px);
                    border-radius: 0.75rem;
                    margin-top: 0.5rem;
                }
                .custom-dropdown-item {
                    color: rgba(255, 255, 255, 0.8);
                    padding: 0.75rem 1.25rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .custom-dropdown-item:hover, .custom-dropdown-item.active {
                    background-color: rgba(255, 255, 255, 0.15);
                    color: white;
                }
            `}</style>

            <div className="gradient-background">
                <MDBContainer className="py-5">
                    
                    <MDBTypography tag="h1" className="text-center text-white mb-5 pb-3" style={{ fontWeight: 300, letterSpacing: '2px' }}>
                        Pusat Pengaturan
                    </MDBTypography>

                    <MDBRow className="justify-content-center g-4">
                        {/* Panel 1: Pengaturan Hostname */}
                        <MDBCol md="10" lg="5">
                            <div className="glass-panel p-4 h-100">
                                <MDBTypography tag="h4" className="mb-4 text-center" style={{ fontWeight: 400 }}>
                                    <MDBIcon fas icon="network-wired" className="me-2" /> Konfigurasi Server
                                </MDBTypography>
                                <MDBRow>
                                    <MDBCol>
                                        <div className={`choice-button ${activeHostname === HOSTNAME_LOCAL && 'active'}`} onClick={() => handleSetHostname(HOSTNAME_LOCAL)}>
                                            <MDBIcon fas icon="server" size="2x" className="mb-2" />
                                            <p className="mb-0">Local</p>
                                        </div>
                                    </MDBCol>
                                    <MDBCol>
                                        <div className={`choice-button ${activeHostname === HOSTNAME_PUBLIC && 'active'}`} onClick={() => handleSetHostname(HOSTNAME_PUBLIC)}>
                                            <MDBIcon fas icon="cloud" size="2x" className="mb-2" />
                                            <p className="mb-0">Public</p>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                                <hr className="my-4" style={{ backgroundColor: 'rgba(255,255,255,0.3)'}} />
                                <p className="text-center" style={{ color: 'rgba(255,255,255,0.8)' }}>Alamat Kustom:</p>
                                <div className="d-flex align-items-center">
                                     <MDBInput wrapperClass="custom-input flex-grow-1" placeholder="http://..." type="text" value={customHostname} onChange={(e) => setCustomHostname(e.target.value)} />
                                     <MDBBtn floating className="ms-2" style={{ background: 'rgba(255,255,255,0.2)' }} onClick={handleSaveCustom} title="Simpan Kustom"><MDBIcon fas icon="save" /></MDBBtn>
                                </div>
                            </div>
                        </MDBCol>

                        {/* Panel 2: Pengaturan Model Genai */}
                        <MDBCol md="10" lg="5">
                            <div className="glass-panel p-4 h-100">
                                <MDBTypography tag="h4" className="mb-4 text-center" style={{ fontWeight: 400 }}>
                                     <MDBIcon fas icon="brain" className="me-2" /> Model AI
                                </MDBTypography>
                                
                                <div className="custom-dropdown-toggle d-flex justify-content-between align-items-center" onClick={() => setIsGenaiDropdownOpen(!isGenaiDropdownOpen)}>
                                    <span>{getGenaiLabel(activeGenai)}</span>
                                    <MDBIcon fas icon={`chevron-${isGenaiDropdownOpen ? 'up' : 'down'}`} />
                                </div>

                                <MDBCollapse open={isGenaiDropdownOpen}>
                                    <div className="custom-dropdown-menu mt-2">
                                        {GENAI_MODELS.map((model) => (
                                            <div 
                                                key={model.value}
                                                className={`custom-dropdown-item ${activeGenai === model.value && 'active'}`}
                                                onClick={() => handleGenaiChange(model.value)}
                                            >
                                                {model.label}
                                            </div>
                                        ))}
                                    </div>
                                </MDBCollapse>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    
                    {/* Tombol Kembali */}
                    <MDBRow className="d-flex justify-content-center mt-5">
                        <MDBCol md="10" lg="4" className="d-grid">
                             <MDBBtn onClick={() => navigate(-1)} className="glass-panel choice-button border-0 py-3">
                                <MDBIcon fas icon="arrow-left" className="me-2" /> Kembali
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </div>
        </>
    );
};

export default HostnamePage;