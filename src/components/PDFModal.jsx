import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai"

Modal.setAppElement("#root"); // Set the root element for accessibility

// eslint-disable-next-line react/prop-types
const PDFModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="PDF Modal"
            className="fixed inset-0 flex items-center justify-center z-50"
            overlayClassName="fixed inset-0 bg-gray-800 opacity-80"
        >
            <div className="bg-blue-500 p-4 rounded-lg w-full max-w-[720px]">
                <iframe
                    title="Rules Book"
                    src="https://github.com/sriganeshres/varchas23/blob/main/client/src/assets/Rules/sample.pdf"
                    width="100%"
                    height="500px"
                    className="bg-blue-500 text-orange-500 rounded-lg"
                ></iframe>
                <button onClick={onClose} className="absolute top-5 right-5 text-3xl hover:shadow hover:rounded-lg hover:shadow-green-300 text-green-300">
                    <AiOutlineClose />
                </button>
            </div>
        </Modal>
    );
};

export default PDFModal;