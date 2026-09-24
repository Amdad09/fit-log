'use client';


const AddMealFrom = () => {
    return (
        <form className="space-y-6 rounded-2xl border border-white/10 bg-[#1e1f24] p-6 sm:p-8">
            {/* Meal Name */}
            <div>
                <label
                    htmlFor="mealName"
                    className="mb-2 block text-sm font-medium text-white"
                >
                    Meal Name
                </label>

                <input
                    id="mealName"
                    type="text"
                    placeholder="e.g. Chicken & Rice"
                    className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#ccff00]"
                />
            </div>

            {/* Meal Type */}
            <div>
                <label
                    htmlFor="mealType"
                    className="mb-2 block text-sm font-medium text-white"
                >
                    Meal Type
                </label>

                <select
                    id="mealType"
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none focus:border-[#ccff00]"
                >
                    <option value="" disabled>
                        Select meal type
                    </option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snack">Snack</option>
                </select>
            </div>

            {/* Nutrition */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Calories */}
                <div>
                    <label
                        htmlFor="calories"
                        className="mb-2 block text-sm font-medium text-white"
                    >
                        Calories
                    </label>

                    <input
                        id="calories"
                        type="number"
                        placeholder="550"
                        className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ccff00]"
                    />
                </div>

                {/* Protein */}
                <div>
                    <label
                        htmlFor="protein"
                        className="mb-2 block text-sm font-medium text-white"
                    >
                        Protein (g)
                    </label>

                    <input
                        id="protein"
                        type="number"
                        placeholder="35"
                        className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ccff00]"
                    />
                </div>

                {/* Carbs */}
                <div>
                    <label
                        htmlFor="carbs"
                        className="mb-2 block text-sm font-medium text-white"
                    >
                        Carbs (g)
                    </label>

                    <input
                        id="carbs"
                        type="number"
                        placeholder="60"
                        className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ccff00]"
                    />
                </div>

                {/* Fat */}
                <div>
                    <label
                        htmlFor="fat"
                        className="mb-2 block text-sm font-medium text-white"
                    >
                        Fat (g)
                    </label>

                    <input
                        id="fat"
                        type="number"
                        placeholder="15"
                        className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ccff00]"
                    />
                </div>
            </div>

            {/* Image */}
            <div>
                <label
                    htmlFor="image"
                    className="mb-2 block text-sm font-medium text-white"
                >
                    Food Image URL
                </label>

                <input
                    id="image"
                    type="url"
                    placeholder="https://example.com/food.jpg"
                    className="w-full rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ccff00]"
                />
            </div>

            {/* Notes */}
            <div>
                <label
                    htmlFor="notes"
                    className="mb-2 block text-sm font-medium text-white"
                >
                    Notes
                </label>

                <textarea
                    id="notes"
                    rows={4}
                    placeholder="Add some notes about this meal..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#27292f] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#ccff00]"
                />
            </div>

            {/* Button */}
            <button
                type="submit"
                className="w-full rounded-xl bg-[#ccff00] px-5 py-3 font-bold uppercase tracking-wide text-black transition hover:bg-[#d8ff4d] active:scale-[0.98]"
            >
                Add Meal
            </button>
        </form>
    );
};

export default AddMealFrom;
