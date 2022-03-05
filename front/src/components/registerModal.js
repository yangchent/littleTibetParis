import { useNavigate } from "react-router-dom";

const RegisterModal = () => {
    const navigate = useNavigate();

    const handleClickConnect = () => {
        navigate("/login");
    };

    return (
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        Votre compte à bien été créée, vous pouvez désormais vous connecter en cliquant sur le boutout ci-dessous.
                    </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                        className="text-mediumAccent background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleClickConnect}
                    >
                        Se connecter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal