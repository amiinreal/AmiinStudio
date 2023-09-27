import React from 'next';


const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold text-black mb-4">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            required
                        />
                    </div>
                    <button
                        className="bg-indigo-500 text-white font-medium py-2 px-4 rounded hover:bg-indigo-600 transition duration-300"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center mt-4 text-black">
                    I am new, <a className="text-indigo-500" href='../auth/signup'>Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
