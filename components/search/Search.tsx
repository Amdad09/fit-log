'use client';

interface SearchProps {
    onSearch: (searchTerm: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
    return (
        <div className="">
            <label className="flex w-full items-center gap-3 rounded-full border border-primary/30 bg-base-200 px-5 py-3 transition-colors focus-within:border-primary/30">
                <svg
                    className="h-5 w-5 shrink-0 opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>

                <input
                    type="search"
                    onChange={(e) => onSearch(e.target.value)}
                    placeholder="Search workouts..."
                    className="w-full bg-transparent outline-none border-none focus:outline-none focus:ring-0"
                />
            </label>
        </div>
    );
};

export default Search;
