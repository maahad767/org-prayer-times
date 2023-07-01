import React, { useState, useEffect } from 'react';

interface Floor {
    id: number;
    number: number;
    imam: string;
}

interface FloorDropdownProps {
    selectedOffice: number;
}

const FloorDropdown: React.FC<FloorDropdownProps> = ({ selectedOffice }) => {
    const [floors, setFloors] = useState<Floor[]>([]);

    useEffect(() => {
        if (selectedOffice) {
            // Fetch floors for the selected office from API and set the floors state
            fetch(`http://0.0.0.0:8000/org/offices/${selectedOffice}/floors/`)
                .then(response => response.json())
                .then((data: Floor[]) => setFloors(data));
        }
    }, [selectedOffice]);

    return (
        <div>
            <label htmlFor="floor">Floor:</label>
            <select id="floor" disabled={!selectedOffice}>
                <option value="">Select a floor</option>
                {floors.map(floor => (
                    <option key={floor.id} value={floor.id}>{floor.number}</option>
                ))}
            </select>
        </div>
    );
};

export default FloorDropdown;
