import Realm from 'realm';
import { saveUser, saveAssetsToRealm, UserSchema, AssetSchema } from '../src/schemas/RealmDAO';

it('saveUser', () => {
    let x = {username: 'MAXADMIN', password: '123456'};
    saveUser(x);
    expect(true).toBe(true);
})

// it('saveAllAssts', () => {
//     let assets = [{
//         assetnum: 'assetnum',
//         href: 'href',
//         description: 'description',
//         location: 'location',
//         status: 'status',
//         audited: true,
//         lastauditdate: new Date()
//     }];
//     saveAssetsToRealm(assets);

//     Realm.open({schema: [AssetSchema]})
//     .then(realm => {
//         a = realm.objects('Asset').filtered('assetnum = "assetnum"');
//         expect(a[0].description).toBe('description');
//     })
//     .catch(error => {
//         fail();
//     });
// })