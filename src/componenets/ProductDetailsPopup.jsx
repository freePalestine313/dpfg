import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ProductDetailsPopup = ({ show, onHide, product }) => {
    if (!product) {
        return null;
    }

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header className="bg-dark text-light d-flex justify-content-between align-items-center">
                <div className="order-2">
                    <h5 className="font-weight-bold">Contributor - {product.contributor}</h5>
                </div>
                <h5>{product.name}</h5>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-4">
                    <h6 className="font-weight-bold">Reason</h6>
                    <p>{product.reason}</p>
                </div>
                <div className="mb-4">
                    <h6 className="font-weight-bold">Category</h6>
                    <p>{product.categories.join(', ')}</p>
                </div>
                <div className="mb-4">
                    <h6 className="font-weight-bold">Countries</h6>
                    <p>{product.countries}</p>
                </div>

                <div className="mb-4">
                    <h6 className="font-weight-bold">Synonyms</h6>
                    <p>{product.synonyms}</p>
                </div>

                <div className="mb-4">
                    <h6 className="font-weight-bold">Source</h6>
                    <ul>
                        {product.source.map((link, index) => (
                            <li key={index}>
                                <a href={link} target="_blank" rel="noopener noreferrer" className="font-weight-bold text-dark">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h6 className="font-weight-bold">Alternatives</h6>
                    <p>{product.alternatives.join(', ')}</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="bg-light">
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};


export default ProductDetailsPopup;
