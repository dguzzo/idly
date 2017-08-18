import { isClosed } from 'helpers';
import { findInAreaKeys } from 'helpers/findInAreaKeys';
import { weakCache } from 'helpers/weakCache';
export const isArea = weakCache((way) => {
    if (way.tags.get('area') === 'yes')
        return true;
    if (!isClosed(way) || way.tags.get('area') === 'no')
        return false;
    return findInAreaKeys(way.tags);
});
//# sourceMappingURL=isArea.js.map