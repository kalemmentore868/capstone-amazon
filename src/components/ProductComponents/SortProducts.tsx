import React from 'react';
import { Dropdown } from 'react-bootstrap';

interface Props {
    sortOptions: string[];
    selectedOption: string;
    onSelectOption: (option: string) => void;
}

const SortProducts: React.FC<Props> = ({ sortOptions, selectedOption, onSelectOption }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" className="sort " id="dropdown-sort">
                Sort by: {selectedOption}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {sortOptions.map(option => (
                    <Dropdown.Item key={option} onClick={() => onSelectOption(option)}>
                        {option}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SortProducts;