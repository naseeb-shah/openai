import { useState, useRef } from 'react';
import { FiUpload } from 'react-icons/fi';
import { MdCancel } from "react-icons/md";
import './index.css';
import Header from '../Header';

const Upload = ({ toggleSidebar }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        setLoading(true);
        const id = setTimeout(() => {
            if (selectedFile) {
                const newFile = {
                    file: selectedFile,
                    tags: []
                };
                setUploadedFiles([...uploadedFiles, newFile]);
                setSelectedFile(null);
            }
            setLoading(false);
        }, 1000);

        return () => clearTimeout(id);
    };

    const onRemove = () => {
        setSelectedFile(null);
    };

    const handleTagChange = (e, index) => {
        const value = e.target.value;
        const updatedFiles = [...uploadedFiles];
        updatedFiles[index].tags.push(value);
        setUploadedFiles(updatedFiles);
    };

    const handleRemoveTag = (fileIndex, tagIndex) => {
        const updatedFiles = [...uploadedFiles];
        updatedFiles[fileIndex].tags.splice(tagIndex, 1);
        setUploadedFiles(updatedFiles);
    };

    const onToggle = () => {
        toggleSidebar()
    }

    return (
        <div className="upload-container" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
            <Header name='Upload CSV' onToggle={onToggle }/>
            {/* <h2 className='dashboard-heading'>Dashboard</h2>           */}

            <div className='container'>
                <div className="uploader-container" >
                    <input type="file" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} />
                    <div className='dropper' onClick={() => fileInputRef.current.click()}>
                        <img style={{ width: '50px' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/640px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png' alt="Document" />
                        <p>Drop your excel sheet here or browse</p>
                    </div>
                    {selectedFile && (
                        <div >
                            <p>Selected File: {selectedFile.name}</p>
                            <button className='remove-button' onClick={onRemove}>Remove</button>
                        </div>
                    )}
                    <button className='upload-button' onClick={handleUpload} disabled={selectedFile === null}>
                        <FiUpload size={18} /> {isLoading ? 'Loading...' : `Upload`}
                    </button>
                </div>
            </div>

            {uploadedFiles.length > 0 &&
                <div className="uploaded-files">
                    <h2 style={{textAlign:'start'}}>Uploads</h2>
                    <table className='uploads-container'>
                        <thead>
                            <tr className='head-row'>
                                <th>Sl.No</th>
                                <th>Links</th>
                                <th>Prefix</th>
                                <th>AddTags</th>
                                <th>SelectedTags</th>
                            </tr>
                        </thead>
                        <tbody>
                            {uploadedFiles.map((fileObj, index) => (
                                <tr key={index} className='row'>
                                    <td>{index + 1 > 9 ? index : `0${index + 1}`}</td>
                                    <td>{fileObj.file.name}</td>
                                    <td>Sample prefix</td>
                                    <td>
                                        <select onChange={(e) => handleTagChange(e, index)}>
                                            <option value="">Select Tag</option>
                                            <option value="tag1">Tag 1</option>
                                            <option value="tag2">Tag 2</option>
                                            <option value="tag3">Tag 3</option>
                                            <option value="tag4">Tag 4</option>
                                        </select>
                                    </td>
                                    <td>
                                        <ul className='tags-container'>
                                            {fileObj.tags.map((tag, tagIndex) => (
                                                <li key={tagIndex} className='tag-item'>
                                                    {tag}
                                                    <MdCancel style={{ cursor: 'pointer' }} onClick={() => handleRemoveTag(index, tagIndex)} />
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Upload;
