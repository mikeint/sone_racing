'use client'
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface MoneyContextType {
    money: number;
    setMoney: (money: number) => void;
}

const MoneyContext = createContext<MoneyContextType | undefined>(undefined);

export const MoneyProvider = ({ children }: { children: ReactNode }) => {
    const [money, setMoney] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/getMoney', {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json',},
                });
                if (!response.ok) throw new Error(`Error: ${response.statusText}`);

                const result = await response.json();
                setMoney(result.money);
            } catch (error: any) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <MoneyContext.Provider value={{ money, setMoney }}>
            {children}
        </MoneyContext.Provider>
    );
};

export const useMoney = () => {
    const context = useContext(MoneyContext);
    if (context === undefined) {
        throw new Error('useMoney must be used within a MoneyProvider');
    }
    return context;
};
