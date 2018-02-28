import { FETCHING_ASSETS, FETCHING_ASSETS_FAILURE, FETCHING_ASSETS_SUCCESS, CHECK_AUDIT_ASSET } from '../actions/AssetsActions';

const initialState = {
    assets: [],
    isFetching: false,
    error: false,
}

export default function assetsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_ASSETS:
            return {
                ...state,
                isFetching: true,
                assets: []
            }
        case FETCHING_ASSETS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                assets: action.assets
            }
        case FETCHING_ASSETS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case CHECK_AUDIT_ASSET:
           
            // const updatedAssets = state.assets.map(
            //     (asset) => {
            //         if (asset.assetnum === action.assetnum)
            //         {
            //             asset.audited = !asset.audited
            //             if (asset.audited) {
            //                 asset.lastauditdate = new Date();
            //             } else {
            //                 asset.lastauditdate = ''
            //             }
            //             console.log(asset);
            //         }
                    
            //         return asset;
                    
            //     }
            // )
            // console.log(updatedAssets);
            // console.log(state.assets)
            return {
                ...state, 
                assets: state.assets.map(
                    (asset) => asset.assetnum === action.assetnum ? 
                                {...asset,
                                    audited: !asset.audited,
                                    lastauditdate: asset.audited? '':new Date() }
                                : asset)
            }
        default: 
            return state;
    }
}