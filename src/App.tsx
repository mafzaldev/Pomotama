import { Setting, Timer, Todos } from './components';

const App = () => {
    return (
        <main className="px-3 sm:px-4">
            <header className="mx-auto flex max-w-2xl items-center justify-between py-4">
                <h1 className="text-2xl font-bold text-white">Pomotama</h1>
                <Setting />
            </header>
            <Timer />
            <Todos />
            <div className="mt-10 bg-white">
                <h2 className="text-xl font-bold">
                    How to use the Pomodoro Timer?
                </h2>
                <ol className="ml-10 list-decimal">
                    <li>Add tasks to work on today</li>
                    <li>
                        Set estimate pomodoros (1 = 25min of work) for each
                        tasks
                    </li>
                    <li>Select a task to work on</li>
                    <li>Start timer and focus on the task for 25 minutes</li>
                    <li>Take a break for 5 minutes when the alarm ring</li>
                    <li>Iterate 3-5 until you finish the tasks</li>
                </ol>
            </div>
        </main>
    );
};

export default App;
