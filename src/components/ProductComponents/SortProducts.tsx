import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

interface Props {
    sortOptions: string[];
    selectedOption: string;
    onSelectOption: (option: string) => void;
}



const SortProducts: React.FC<Props> = ({ sortOptions, selectedOption, onSelectOption }) => {

    const [search, setSearch] = useSearchParams()

    const handleSort = (option: string) => {
        onSelectOption(option)
        search.set("sort", option)
        setSearch(search, {
            replace: true
        })
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" className="sort " id="dropdown-sort">
                Sort by: {selectedOption}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {sortOptions.map(option => (
                    <Dropdown.Item key={option} onClick={() => handleSort(option)}>
                        {option}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SortProducts;