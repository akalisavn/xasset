import Realm from 'realm';

export const AssetSchema = {
    name: 'Asset',
    properties: {
        assetnum:       'string',
        href:           'string',
        description:    'string',
        location:       'string?',
        status:         'string',
        audited:        'bool',
        lastauditdate:  'date?'
    }
}

export function saveAssetsToRealm(assets) {
    console.log('Executed saveAssetsToRealm');
    Realm.open({schema: [AssetSchema]})
        .then(realm => {
            //for (var i = 0; i < assets.length; i++) {
                // realm.write(() => {
                //     realm.create('Asset', {
                //         assetnum:   assets[i].assetnum,
                //         href:       assets[i].href,
                //         description: assets[i].description,
                //         location: assets[i].location,
                //         status: assets[i].status,
                //         audited: assets[i].audited,
                //         //lastauditdate: assets[i].lastauditdate
                //     });
                // })
            //}
            realm.write(() => {
                const asset = realm.create('Asset', {
                    assetnum:   '123',
                    href:       '123',
                    description: 'description',
                    location: 'location',
                    status: 'status',
                    audited: 'audited'
                    //lastauditdate: assets[i].lastauditdate
                });
                console.log(asset);
            })
           
        })
        .catch(error => {
            console.log(error);
            alert('Unable to write to access local database');
        });

}

export function getAllAssetsFromRealm() {
    //let objs = realm.objects(MyObjType).toArray()
    console.log('Get All Assets');
    Realm.open({schema: [AssetSchema]})
        .then(realm => {
            console.log(realm.objects('Asset').toArray());
        })
        .catch(error => error => {
            alert('Unable to write to access local database');
        }); 
}