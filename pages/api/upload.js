import React, { useState } from 'react';
import FileUpload from './FileUpload'; // Bu bileşeni dahil edin

export default function UploadPage() { // Dosya yükleme sayfası bileşeni
    return (
        <div>
            <h1>Conference Management System</h1>
            <FileUpload /> {/* Dosya yükleme bileşenini ekleyin */}
        </div>
    );
}