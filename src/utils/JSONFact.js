export default {
  createAssetUpdateObj(assetUri) {
    return {
      _data = {
        audited: true,
        lastauditeddate: '2018-02-15'},
      _meta = {
        uri = assetUri,
        method = 'PATCH',
        patchtype = 'MERGE'
      },
    }
  }
}
