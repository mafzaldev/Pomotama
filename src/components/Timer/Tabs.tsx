/* API Design
`items`: a list of item object, each item object contain:
  - name: the unique identifier of the object
  - label: the text shown in the tab item
  - value: the value the tab should provide

`defaultTab`: The default tab to show. If defaultTab is empty, we use the first item as a default as the value

`handler`: The handler to update the timer value
*/

/* Test Case
- All the provided items should be displayed.
- The default active item should be reflected correctly.
- Selecting the tab items updates the current timer value
- Test that you are able to initialize multiple instances of the component, each with independent states.
 */

import { useState, useEffect } from 'react';

interface tabItemProps {
    name: string;
    label: string;
    value: number;
}

interface TabsProps {
    defaultTab?: string;
    items: tabItemProps[];
    handler: (value: number) => void;
}

const Tabs = ({ defaultTab, items, handler }: TabsProps) => {
    const [tab, setTab] = useState(defaultTab ?? items[0].name);

    // should set the time outside of the component
    useEffect(() => {
        handler(items[0].value);
    }, []);

    return (
        <div className="tabs">
            <div className="tabList">
                {items.map(({ name, label, value }) => {
                    const isActive = tab === name;

                    return (
                        <button
                            key={name}
                            type="button"
                            className={`${isActive ? 'active-style' : ''}`}
                            onClick={() => {
                                setTab(name);
                                handler(value);
                            }}
                            value={value}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export { Tabs };