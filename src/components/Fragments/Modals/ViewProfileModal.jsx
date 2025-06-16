import React, { useRef } from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "../../Elements/Modal"; // Menggunakan komponen Modal Anda
import { useFormattedDate } from '../../../hooks';
import useViewProfileModalEffect from "../../../hooks/effects/useViewProfileModalEffect";
import { useSelector } from "react-redux";

// Komponen kecil untuk membuat badge status dengan styling langsung
const StatusBadge = ({ is_active }) => (
  <span style={{
    padding: '0.35em 0.65em',
    fontSize: '0.8em',
    fontWeight: '700',
    lineHeight: '1',
    color: '#fff',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: '50rem',
    backgroundColor: is_active ? '#198754' : '#dc3545' // Hijau untuk aktif, Merah untuk tidak aktif
  }}>
    {is_active ? 'Aktif' : 'Tidak Aktif'}
  </span>
);

// Komponen untuk menampilkan setiap baris detail informasi
const ProfileDetailRow = ({ icon, label, value }) => (
    <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '12px 0',
        borderBottom: '1px solid #eee'
    }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <MDBIcon fas icon={icon} className="text-muted me-3" />
            <span className="text-muted">{label}</span>
        </div>
        <span style={{ fontWeight: '500', textAlign: 'right' }}>{value || '-'}</span>
    </div>
);


const ViewProfileModal = (props) => {
   const { user } = props;
   const imgRef = useRef();
   const command = useSelector(state => state.commandSlice.command);

   // Hook custom Anda
   useViewProfileModalEffect(command, imgRef);
   
   // Data-fetching dan formatting dibuat lebih jelas
   const fullName = user ? `${user.first_name || ''} ${user.last_name || ''}`.trim() : "Pengguna";
   const registrationDate = useFormattedDate(user?.date_joined);

   return (
      <Modal id="viewProfileModal">
         <ModalHeader title="Profil Pengguna" />

         <ModalBody style={{ padding: '0' }}>
            {/* Bagian Header Profil */}
            <div style={{ 
                textAlign: 'center', 
                padding: '2rem', 
                background: 'linear-gradient(to top, #f8f9fa, #ffffff)' 
            }}>
                <img 
                    ref={imgRef}
                    // Ganti 'user.image_url' dengan properti gambar dari objek user Anda
                    src={user?.image_url || `https://ui-avatars.com/api/?name=${fullName.replace(' ', '+')}&background=0D6EFD&color=fff&size=128`}
                    alt="Foto Profil"
                    className="rounded-circle"
                    style={{ 
                        width: '100px', 
                        height: '100px', 
                        objectFit: 'cover',
                        border: '4px solid #fff',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}
                />
                <h4 className="mt-3 mb-0" style={{ fontWeight: '600' }}>{fullName}</h4>
                <p className="text-muted">@{user?.username}</p>
            </div>

            {/* Bagian Detail Informasi */}
            <div style={{ padding: '1rem 2rem' }}>
                <ProfileDetailRow icon="user-circle" label="Nama" value={fullName} />
                <ProfileDetailRow icon="at" label="Username" value={user?.username} />
                <ProfileDetailRow icon="phone-alt" label="Nomor Telepon" value={user?.phone_number} />
                <ProfileDetailRow icon="calendar-check" label="Tanggal Daftar" value={registrationDate} />
                <ProfileDetailRow icon="user-shield" label="Superuser" value={user?.is_superuser ? 'Ya' : 'Tidak'} />
                <ProfileDetailRow icon="check-circle" label="Status" value={<StatusBadge is_active={user?.is_active} />} />
            </div>
         </ModalBody>

         <ModalFooter style={{ borderTop: 'none', padding: '1rem 2rem' }}>
            <MDBBtn block color="secondary" outline data-bs-dismiss="modal">
               Tutup
            </MDBBtn>
         </ModalFooter>
      </Modal>
   )
}

export default ViewProfileModal;