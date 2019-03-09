export default {
    filters: {
        shortContent: function(value) {
            return value.slice(0, 200) + '...';
        }
    }
}