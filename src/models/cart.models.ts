// export interface OptionsList {
//     option_id: string;
//     option_name: string;
//     option_price: number;
//     option_quantity: number;
//     package_id: string;
// }

// export interface CartList {
//     package_id: string;
//     package_name: string;
//     status: string;
//     price: number;
//     quantity: number;
//     total: number;
//     options_data?: OptionsList[];
// }

// export interface ProfileResponse {
//     resultCode: number;
//     resultDescription?: string;
//     total: number;
//     page: number;
//     limit: number;
//     cart_data?: CartList[];
// }


// export const cartData: CartList[] = [
//     {
//         package_id: '123',
//         package_name: 'Sample Package 1',
//         status: 'active',
//         price: 100,
//         quantity: 2,
//         total: 200,
//         options_data: [
//             {
//                 option_id: '456',
//                 option_name: 'Sample Option 1',
//                 option_price: 50,
//                 option_quantity: 1,
//                 package_id: '123',
//             },
//         ],
//     },
//     {
//         package_id: '789',
//         package_name: 'Sample Package 2',
//         status: 'inactive',
//         price: 150,
//         quantity: 1,
//         total: 150,
//         options_data: [
//             {
//                 option_id: '101',
//                 option_name: 'Sample Option 2',
//                 option_price: 75,
//                 option_quantity: 2,
//                 package_id: '789',
//             },
//         ],
//     },
// ];



export interface OptionsList {
    option_id: number;
    option_name: string;
    option_price: number;
    option_quantity: number;
    option_date?: Date;
    package_id: number;
}

export interface CartList {
    package_id: number;
    package_name: string;
    status: string;
    price: number;
    quantity: number;
    total: number;
    date?: Date;
    options_data?: OptionsList[];
}

export interface ProfileResponse {
    resultCode: number;
    resultDescription?: string;
    total: number;
    page: number;
    limit: number;
    cart_data?: CartList[];
}

const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomStatus = () => (Math.random() > 0.5 ? 'active' : 'inactive');
const generateRandomId = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const generateRandomDate = (start: Date, end: Date): Date => {
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime);
};
const generateRandomCartData = (numRecords: number): CartList[] => {
    const data: CartList[] = [];

    const startDate = new Date('2022-01-01');
    const endDate = new Date('2024-07-31');

    for (let i = 0; i < numRecords; i++) {
        const packageId = generateRandomId(1, 100);
        const date = generateRandomDate(startDate, endDate);

        data.push({
            package_id: packageId,
            package_name: `Sample Package ${i + 1}`,
            status: getRandomStatus(),
            price: getRandomInt(50, 200),
            quantity: getRandomInt(1, 5),
            total: getRandomInt(50, 1000),
            date: date,
            options_data: [
                {
                    option_id: generateRandomId(1, 100),
                    option_name: `Sample Option ${i + 1}`,
                    option_price: getRandomInt(10, 100),
                    option_quantity: getRandomInt(1, 3),
                    option_date: date,
                    package_id: packageId,
                },
            ],
        });
    }

    return data;
};

export const cartData: CartList[] = generateRandomCartData(15);