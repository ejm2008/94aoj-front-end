import React from 'react';
import Home from '../../../../presentation/pages/home';
import { MakeHamburgers } from '../../usecases/HamburgerFactory';
import { MakeAppetizers } from '../../usecases/AppetizersFactory';
import { MakeDesserts } from '../../usecases/DessertsFactory';
import { MakeBeverages } from '../../usecases/BeveragesFactory';
import { MakeCategories } from '../../usecases/CategoriesFactory';

export default function HomeFactory() {
    return (
        <div>
            <Home 
                hamburg={MakeHamburgers()}
                appet={MakeAppetizers()}
                desser={MakeDesserts()}
                bever={MakeBeverages()} 
                categ={MakeCategories()}            />
        </div>
    )
}
