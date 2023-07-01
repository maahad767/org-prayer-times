import OfficeDropdown from "@/app/components/OfficeDropdown";
import FloorDropdown from "@/app/components/FloorDropdown";
import {useState} from "react";

const Navbar = () => {
    const [selectedOffice, setSelectedOffice] = useState<number>(0);

    const handleOfficeChange = (selectedOffice: number) => {
        setSelectedOffice(selectedOffice);
    };

    return (
        <nav className="navbar py-6 border-b">
            <div className="flex justify-between items-center">
                <a className="navbar-brand" href="#">Logo</a>
                <div className="navbar-menu flex space-x-4">
                    <OfficeDropdown onChange={handleOfficeChange} />
                    <FloorDropdown selectedOffice={selectedOffice} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
