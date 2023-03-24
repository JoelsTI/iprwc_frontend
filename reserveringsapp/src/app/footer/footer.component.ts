import {Component} from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: []
})
export class FooterComponent {

    navCategories = [
        {
            display: 'Get inspired',
            items: [
                {
                    display: 'Nature in The Netherlands',
                    url: 'https://www.holland.com/global/tourism/get-inspired/this-is-nl/nature-in-the-netherlands.htm'
                },
                {
                    display: 'Dutch Heritage',
                    url: 'https://www.holland.com/global/tourism/get-inspired/this-is-nl/dutch-heritage.htm'
                },
                {
                    display: 'New Dutch',
                    url: 'https://www.holland.com/global/tourism/get-inspired/this-is-nl/new-dutch.htm'
                },
                {
                    display: 'Blooming Netherlands',
                    url: 'https://www.holland.com/global/tourism/get-inspired/this-is-nl/blooming-netherlands.htm'
                },
                {
                    display: 'Water in the Netherlands',
                    url: 'https://www.holland.com/global/tourism/get-inspired/this-is-nl/water-in-the-netherlands-1.htm'
                }
            ]
        },
        {
            display: 'Cities',
            items: [
                {
                    display: 'Utrecht',
                    url: 'https://www.holland.com/global/tourism/discover-the-netherlands/visit-the-cities/utrecht.htm'
                },
                {
                    display: 'The Hague',
                    url: 'https://www.holland.com/global/tourism/discover-the-netherlands/visit-the-cities/the-hague.htm'
                },
                {
                    display: 'Amsterdam',
                    url: 'https://www.holland.com/global/tourism/discover-the-netherlands/visit-the-cities/amsterdam.htm'
                },
                {
                    display: 'Rotterdam',
                    url: 'https://www.holland.com/global/tourism/discover-the-netherlands/visit-the-cities/rotterdam.htm'
                }
            ]
        }
    ]

    constructor() {}

    ngOnInit(): void {

    }
}
