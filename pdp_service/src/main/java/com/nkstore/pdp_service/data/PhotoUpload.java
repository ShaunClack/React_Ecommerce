package com.nkstore.pdp_service.data;

import com.cloudinary.Cloudinary;

import com.cloudinary.StoredFile;
import com.cloudinary.Transformation;
import org.springframework.web.multipart.MultipartFile;

public class PhotoUpload extends StoredFile {
    private String title;

    private MultipartFile file;

    

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }
}