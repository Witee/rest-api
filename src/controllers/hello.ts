import compose from '@/libs/compose';

import hello from '@/handlers/hello';

const sayHello = [hello.sayHello()];

export default compose({ sayHello });
